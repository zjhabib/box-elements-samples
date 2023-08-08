import React from "react";
import ContentExplorer from "box-ui-elements/es/elements/content-explorer";
import "./App.css";

function App() {
  const rootFolderID = "216521896990"; // folder against which the query is run
  const token = "9nZ8667bFHljKDoqUuBuJI2V4XswzK8s";
  const mdQuery = {
    from: "enterprise_1059715940.MetadataTemplateName", // 973933 is Enterprise ID and mdBasedContentExplorer is metadata template key
    query: "cost >= :value",
    query_params: { "value": 1 },
    ancestor_folder_id: 216521896990
  };

  // The metadata fields/columns to view - must be valid field names from the metadata template
  const metadataColumnsToShow = [
    { name: "cost", canEdit: true },
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
