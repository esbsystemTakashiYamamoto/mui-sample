import { PageHeader } from "../molecules/PageHeader";
import { Template1 } from "../template/Template1";
import { StdTab } from "../atoms/StdTab";
import { GridTemplate1 } from "../template/GridTemplate1";
import { DatetimePickerSample1 } from "../organisms/DatetimePickerSample1";
import { DatetimePickerSample2 } from "../organisms/DatetimePickerSample2";
import { DatetimePickerSample3 } from "../organisms/DatetimePickerSample3";
import { DatetimePickerSample4 } from "../organisms/DatetimePickerSample4";
import { DatetimePickerSample5 } from "../organisms/DatetimePickerSample5";
import { DatetimePickerSample6 } from "../organisms/DatetimePickerSample6";
import { DatetimePickerSample7 } from "../organisms/DatetimePickerSample7";
import { DatetimePickerSample8 } from "../organisms/DatetimePickerSample8";
import { DatetimePickerSample9 } from "../organisms/DatetimePickerSample9";

const basic1 = [
  { label: "日付時間を扱う方法", content: <DatetimePickerSample1 /> },
  { label: "日付のみ扱う方法", content: <DatetimePickerSample2 /> },
  { label: "時間のみ扱う方法", content: <DatetimePickerSample3 /> },
];

const dateSample = [
  { label: "日付のみ", content: <DatetimePickerSample4 /> },
  { label: "いろいろ", content: <DatetimePickerSample5 /> },
  { label: "バリデーション", content: <DatetimePickerSample6 /> },
];

const custom = [
  { label: "カスタム1", content: <DatetimePickerSample7 /> },
  { label: "カスタム2", content: <DatetimePickerSample8 /> },
];

const timeSample = [{ label: "時間のみ", content: <DatetimePickerSample9 /> }];

export const MuiDateTimePickers = () => {
  const message = ["日付・時間を扱うコンポーネント", "日付・時間は面倒くさい・・・"];

  return (
    <>
      <Template1
        header={
          <PageHeader
            label="Date and Time Pickers"
            message={message}
            buttonProps={{
              buttonLabel: "公式ページへ",
              url: "https://mui.com/x/react-date-pickers/",
            }}
          />
        }
      />

      <StdTab
        tabWidth={200}
        tabPanels={[
          {
            label: "コンポーネントの種類",
            content: <GridTemplate1 components={basic1} height={1100} />,
          },
          {
            label: "日付のみ",
            content: <GridTemplate1 components={dateSample} height={650} />,
          },
          {
            label: "カスタムのいろいろ",
            content: <GridTemplate1 components={custom} height={600} />,
          },
          {
            label: "時間のみ",
            content: <GridTemplate1 components={timeSample} height={600} />,
          },
        ]}
      />
    </>
  );
};
