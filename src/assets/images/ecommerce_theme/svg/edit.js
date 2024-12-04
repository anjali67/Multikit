import Svg, {Path} from 'react-native-svg';
import React from 'react';

export function Edit(props) {
  return (
    <Svg
      width={props.width ? props.width : '39'}
      height={props.height ? props.height : '19'}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg">
      <Path
        opacity="0.4"
        d="M6.70399 1.62692H4.52291C2.72916 1.62692 1.60449 2.89684 1.60449 4.69467V9.5445C1.60449 11.3423 2.72391 12.6123 4.52291 12.6123H9.67024C11.4698 12.6123 12.5892 11.3423 12.5892 9.5445V7.19484"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.14986 6.37053L9.50911 2.01128C10.0522 1.46878 10.9324 1.46878 11.4755 2.01128L12.1854 2.72119C12.7285 3.26428 12.7285 4.14511 12.1854 4.68761L7.80519 9.06786C7.56778 9.30528 7.24578 9.43886 6.90978 9.43886H4.72461L4.77944 7.23386C4.78761 6.90953 4.92003 6.60036 5.14986 6.37053Z"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.84668 2.68479L11.5102 5.34829"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
