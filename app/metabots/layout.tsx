import FullContainer from "@/components/custom/FullContainer";
import Tabs from "@/components/metabots/Tabs";
interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function MetaLayout({ children }: DashboardLayoutProps) {
  return (
    <FullContainer className="mt-4 pt-10">
      <Tabs />
      {children}
    </FullContainer>
  );
}
