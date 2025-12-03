import type { Cell, RowData } from "@tanstack/react-table";

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "@tanstack/table-core" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    tagColumnMap?: Record<string, string[] | null>;
    enableColumnOrder?: boolean;
    isSelectable?: boolean;
    updateTask?: (taskId: string, updates: Partial<TData>) => void;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    type?: string | null;
    visibleInTable?: boolean | null;
    headerTextLabel?: string | null;
    informationLabel?: string | null;
    isTagColumn?: boolean;
    tagParser?: (value: U) => string | string[];
    exportFormatter?: (cell: Cell<U>) => string;
  }
}
