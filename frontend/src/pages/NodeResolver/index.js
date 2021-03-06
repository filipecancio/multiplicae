import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import retrieve_node_content from '../../services/node.service';
import DetailsStartTree from '../DetailsStartTree';
import DetailsNodeTree from '../DetailsNodeTree';

function NodeResolver() {
  const { node_id } = useParams();

  const [id] = useState(node_id);
  const [nodeData, setNodeData] = useState(node_id);

  useEffect(() => {
    (async () => {
      const content = await retrieve_node_content(id);
      setNodeData(content);
    })();
  }, [id]);

  function showNodeDetails(content_type) {
    const content_types = {
      indice: <DetailsStartTree data={nodeData} />,
      investimento: <DetailsNodeTree data={nodeData} />
    };

    return content_types[content_type];
  }

  return nodeData.content_type ? (
    showNodeDetails(nodeData.content_type)
  ) : (
    <h1>Loading</h1>
  );
}

export default NodeResolver;
