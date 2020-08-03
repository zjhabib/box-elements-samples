import React from "react";
import ContentExplorer from "box-ui-elements/es/elements/content-explorer";
import "./App.css";

function App() {
  const rootFolderID = "82263541892"; // folder against which the query is run
  const token = "dev_toekn";
  const mdQuery = {
    from: "enterprise_973933.mdBasedContentExplorer", // 973933 is Enterprise ID and mdBasedContentExplorer is metadata template key
    query: "type <> :arg1",
    query_params: { arg1: "bill1" },
    ancestor_folder_id: rootFolderID
  };

  // The metadata fields/columns to view - must be valid field names from the metadata template
  const metadataColumnsToShow = [
    { name: "type", canEdit: true },
    { name: "vendor", canEdit: true },
    { name: "amount", canEdit: true },
    { name: "year", canEdit: true },
    { name: "approved", canEdit: true },
    { name: "created", canEdit: true }
  ];
  const defaultView = "metadata"; // Required prop to paint the metadata view. If not provided, you'll get regular folder view.

  return (
    <div className="App">
      <header className="App-header">
        <h2>Metadata Views in ContentExplorer</h2>
      </header>
      <section>
        <div className="metadata-based-view">
          <ContentExplorer
            language="en-US"
            messages={{}}
            rootFolderId={rootFolderID}
            token={token}
            metadataQuery={mdQuery}
            metadataColumnsToShow={metadataColumnsToShow}
            defaultView={defaultView}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
