import {
  IgrColumn,
  IgrGrid,
  IgrColumnPipeArgs,
  IgrCellTemplateContext,
} from "@infragistics/igniteui-react-grids";
import { sampleData } from "./appData";
import "./app.css";

const formatOptions: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
formatOptions.digitsInfo = "1.0-0";

export const App = () => {
  const columnBodyTemplate = (ctx: { dataContext: IgrCellTemplateContext }) => {
    return (
      <>
        <div>
          <a href={ctx.dataContext.cell.row.data.url}>
            <span>{ctx.dataContext.cell.row.data.url}</span>
          </a>
        </div>
      </>
    );
  };
  return (
    <div style={{ maxWidth: "800px", maxHeight: "900px", margin: "24px auto" }}>
      <IgrGrid
        data={sampleData}
        primaryKey="id"
        autoGenerate="false"
        width="100%"
        style={{ fontFamily: "Meiryo" }}
      >
        <IgrColumn field="id" width="auto" />
        <IgrColumn field="name" header="製品名" width="auto" />
        <IgrColumn
          field="url"
          header="製品紹介ページ"
          bodyTemplate={columnBodyTemplate}
        />
      </IgrGrid>
    </div>
  );
};
