import { AddressSecurity, TokenSecurity } from "./types";

  
  class ScamChecker {
    private tokenSecurity: TokenSecurity | any = null;
    private addressSecurity: AddressSecurity | any = null;
    private liqLockedPercent: number = 0;
    private liqLockedAmount: number = 0;
    private riskScore: number = 0;
  
    private async getTokenSecurity(address: string): Promise<void> {
      try {
        const response = await fetch(
          `https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=${address}`
        );
        const data = await response.json();
        this.tokenSecurity = data.result;
      } catch (error) {
        // Handle error
      }
    }
  
    private async getAddressSecurity(address: string): Promise<void> {
      try {
        const response = await fetch(
          `https://api.gopluslabs.io/api/v1/address_security/${address}?chain_id=1`
        );
        const data = await response.json();
        this.addressSecurity = data.result;
      } catch (error) {
        // Handle error
      }
    }
  
    private isLiquidityLocked(address: string): void {
      let lockedPercentage = 0;
      let lockedAmount = 0;
      if (this.tokenSecurity && this.tokenSecurity[address]?.lp_holders) {
        this.tokenSecurity[address]?.lp_holders.forEach((e: any) => {
          if (e.is_locked === 1) {
            lockedAmount += Number(e.balance);
            lockedPercentage += Number(e.percent);
          }
        });
      }
  
      this.liqLockedAmount = lockedAmount;
      this.liqLockedPercent = lockedPercentage * 100;
    }
  
    private calcRiskAssessment(address: string): void {
      let score = 0;
  
      if (
        (this.tokenSecurity && this.tokenSecurity[address]?.cannot_sell_all === "1") ||
        this.tokenSecurity[address]?.is_honeypot === "1"
      ) {
        score = 0;
        this.riskScore = 0;
        return;
      } else {
        score = score + 8.33;
      }
  
      // Score for contract verification
      if (this.tokenSecurity && this.tokenSecurity[address]?.is_open_source === "0") {
        score = 0;
        this.riskScore = 0;
        return;
      } else {
        score = score + 8.33;
      }
  
      // Score for honeypot related address
      if (this.addressSecurity?.honeypot_related_address === "1") {
        score = 0;
        this.riskScore = 0;
        return;
      } else {
        score = score + 8.33;
      }
  
      // Score for phishing activities
      if (this.addressSecurity?.phishing_activities === "1") {
        score = 0;
        this.riskScore = 0;
        return;
      } else {
        score = score + 8.33;
      }
  
      // Score for darkweb transactions
      if (this.addressSecurity?.darkweb_transactions === "1") {
        score = 0;
        this.riskScore = 0;
        return;
      } else {
        score = score + 8.33;
      }
  
      // Score for stolen funds
      if (this.addressSecurity?.stealing_attack === "1") {
        score = 0;
        this.riskScore = 0;
        return;
      } else {
        score = score + 8.33;
      }
  
      // High Impact: Score for hidden owner
      if (this.tokenSecurity && this.tokenSecurity[address]?.hidden_owner === "1") {
        score = 0;
        this.riskScore = 40;
        return;
      } else {
        score = score + 5;
      }
  
      // High Impact: Score for token owner tampering with balance
      if (this.tokenSecurity && this.tokenSecurity[address]?.owner_change_balance === "1") {
        score = 0;
        this.riskScore = 40;
        return;
      } else {
        score = score + 5;
      }
  
      // High Impact: Score for tokens held by creator
      if (
        this.tokenSecurity &&
        this.tokenSecurity[address]?.creator_balance >
          0.15 * this.tokenSecurity[address]?.total_supply
      ) {
        score = 0;
        this.riskScore = 40;
        return;
      } else {
        score = score + 5;
      }
  
      // High Impact: Score for buy tax
      if (this.tokenSecurity && this.tokenSecurity[address]?.buy_tax * 100 > 10) {
        score = 0;
        this.riskScore = 50;
        return;
      } else {
        score = score + 5;
      }
  
      // High Impact: Score for sell tax
      if (this.tokenSecurity && this.tokenSecurity[address]?.sell_tax * 100 > 10) {
        score = 0;
        this.riskScore = 50;
        return;
      } else {
        score = score + 5;
      }
  
      // High Impact: Score for tampering with spillage
      if (this.tokenSecurity && this.tokenSecurity[address]?.slippage_modifiable === "1") {
        score = 0;
        this.riskScore = 50;
        return;
      } else {
        score = score + 5;
      }
  
      // Score for proxy
      if (
        this.tokenSecurity &&
        this.tokenSecurity[address]?.is_proxy === "1" &&
        score > 20
      ) {
        this.riskScore = score - 10;
        return;
      } else if (
        this.tokenSecurity &&
        this.tokenSecurity[address]?.is_proxy === "1" &&
        score < 20
      ) {
        score = 0;
        this.riskScore = 20;
        return;
      } else {
        score = score + 5;
      }
  
      // Score for creators minting new tokens
      if (
        this.tokenSecurity &&
        this.tokenSecurity[address]?.is_mintable === "1" &&
        score > 20
      ) {
        this.riskScore = score - 5;
        return;
      } else if (this.tokenSecurity && this.tokenSecurity[address]?.is_mintable === "1" && score < 20) {
        score = 0;
        this.riskScore = 20;
        return;
      } else {
        score = score + 5;
      }
  
      this.riskScore = score;
    }
  
    public async assessRisk(address: string): Promise<number> {
      if (!address) {
        return 0;
      }
  
      await this.getTokenSecurity(address);
      await this.getAddressSecurity(address);
  
      if (this.addressSecurity && this.tokenSecurity && this.tokenSecurity[address]) {
        this.isLiquidityLocked(address);
        this.calcRiskAssessment(address);
      }
  
      this.riskScore = Number(this.riskScore.toFixed(0));
      return this.riskScore;
    }

    public getTokenSecurityData(): TokenSecurity | null {
      return this.tokenSecurity;
    }
  
    public getAddressSecurityData(): AddressSecurity | null {
      return this.addressSecurity;
    }
  }

  export default ScamChecker
