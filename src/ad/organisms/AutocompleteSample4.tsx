import { createContext, forwardRef, useContext, useEffect, useRef, useState } from "react";

import {
  Typography,
  Popper,
  ListSubheader,
  useMediaQuery,
  Autocomplete,
  TextField,
} from "@mui/material";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { useTheme, styled } from "@mui/material/styles";

import { VariableSizeList, ListChildComponentProps } from "react-window";
import { faker } from "@faker-js/faker/locale/ja";
import { FilenamePanel } from "../atoms/FilenamePanel";

const LISTBOX_PADDING = 8; // px

// NOTE: 展開したリストを描画している処理
const renderRow = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };

  // NOTE: 💡 グループ項目のスタイルはここを編集する
  if (Object.prototype.hasOwnProperty.call(dataSet, "group")) {
    return (
      <ListSubheader
        key={dataSet.key}
        component="div"
        style={inlineStyle}
        sx={{
          bgcolor: (p) => p.palette.grey[200], // 背景色
          color: (p) => p.palette.primary.main, // 文字色
          fontFamily: "Sawarabi Mincho", // フォント
          fontWeight: "bold", // 太字
          fontSize: "1.3rem", // フォントサイズ
        }}
      >
        {dataSet.group}
      </ListSubheader>
    );
  }

  const { key, ...optionProps } = dataSet[0];

  // NOTE: 💡 選択項目のスタイルはここを編集する
  return (
    <Typography
      key={key}
      component="li"
      {...optionProps}
      noWrap
      style={inlineStyle}
      sx={{
        fontFamily: "Sawarabi Gothic", // フォント
        color: (p) => p.palette.grey[700], // 文字色
      }}
    >
      {key}
    </Typography>
  );
};

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: number) {
  const ref = useRef<VariableSizeList>(null);
  useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
// ❌ ここは編集しない
const ListboxComponent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(
  function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData: React.ReactElement[] = [];
    (children as React.ReactElement[]).forEach(
      (item: React.ReactElement & { children?: React.ReactElement[] }) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
      }
    );

    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up("sm"), {
      noSsr: true,
    });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: React.ReactElement) => {
      if (Object.prototype.hasOwnProperty.call(child, "group")) {
        return 48;
      }

      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={(index) => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  }
);

// Autocompleteの選択肢のスタイル
// ❌ ここは編集しない
const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: "border-box",
    "& ul": {
      padding: 0,
      margin: 0,
    },
  },
});

// ダミーデータ
const data0 = Array.from({ length: 100000 }).map((_, i) => {
  // この構造に意味がある
  return {
    id: i, // idを明示的に振ること
    label: faker.person.fullName(), // 表示するキー名はlabelにする
  };
});

// グループ化ためのデータの準備
const options = data0
  .map((n) => {
    const { label } = n;
    return {
      ...n,
      firstLetter: label[0].toUpperCase(), // グループ化する項目を追加
    };
  })
  .sort((a, b) => a.firstLetter.localeCompare(b.firstLetter)); // ソートしておく事

/**
 * ここが本体
 * 分からないところは無理しない
 * @returns
 */
export const AutocompleteSample4 = () => {
  const [value, setValue] = useState<(typeof options)[number] | null>(null);

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        options={options}
        groupBy={(p) => p.firstLetter}
        getOptionLabel={(p) => `${p.id}: ${p.label} `} // NOTE: 選択肢の表示形式
        noOptionsText="選択肢がありません"
        renderInput={(params) => (
          <TextField
            {...params}
            label="氏名"
            helperText={`${options.length.toLocaleString()}件`}
          />
        )}
        renderOption={(props, option, state) =>
          [props, option, state.index] as React.ReactNode
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        renderGroup={(p) => p as any}
        slots={{
          popper: StyledPopper,
          listbox: ListboxComponent,
        }}
      />
      <Typography variant="h5" color="secondary" sx={{ mt: 2 }}>{`選択した項目は: ${
        value?.label ?? "なし"
      }`}</Typography>

      <Typography variant="body1" sx={{ mt: 2, color: (p) => p.palette.grey[700] }}>
        公式のベージもちょこちょこ変わる
        <br />
        ごにょごにょやってて、いまいちよく分からないところがある
        <br />
        触れる部分からやっていこう
      </Typography>
      <FilenamePanel fileName="AutocompleteSample4.tsx" />
    </>
  );
};
