import React from 'react';

const ellipseNum = (num: number): JSX.Element | string => {
  if (!num) return '0';
  num = Number(num);

  if (num * 10000 < 1) {
    const original_num = num.toFixed(40);
    const end = Number(original_num)
      .toExponential()
      .slice(0, Math.min(3, Number(original_num).toExponential().indexOf('e')))
      .replace('.', '');

    return (
      <>
        0.0
        <sub style={{ padding: '1px', fontSize: '60%' }}>
          {original_num.replace('0.', '').indexOf(end[0])}
        </sub>
        {end}
      </>
    );
  }

  return num.toString();
};

export default ellipseNum;
