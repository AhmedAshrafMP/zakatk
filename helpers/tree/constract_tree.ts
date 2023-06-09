import getFileContent from "../fs/file_content";
import cytoscape, { Core } from "cytoscape";
import { transNoDefault } from "../i18n";

export function getTransFromThreadName(threadName: string): string {
  const nodeNamePart =
    typeof threadName === "string" ? threadName?.replace("t_", "") : "";
  const translated =
    transNoDefault(nodeNamePart + ".title") ||
    transNoDefault(nodeNamePart + ".hello");

  return translated;
}

export async function getTargetNodesFromFileArray(files): Promise<Core> {
  const cy = cytoscape({});
  if (files && Array.isArray(files)) {
    for (let i = 0; i < files.length; i++) {
      const filePath = files[i];

      if (!files[i].includes("/nodes/N_")) continue;

      const content = await getFileContent(filePath);
      const nextTarget = content.match(
        /(go.*?_NODE\_[a-zA-Z0-9_]*)|convo\.stop()|(go.*?_d\_[a-zA-Z0-9_]*)/g
      );
      const currentNode =
        "t_NODE_" + filePath.split("/nodes/N_")[1].split("/")[0];

      if (nextTarget) {
        for (let j = 0; j < nextTarget.length; j++) {
          const target = nextTarget[j];

          if (
            target.includes('gotoThread("') ||
            target.includes("gotoThread('")
          ) {
            const targetNode = target
              .replace("'", '"')
              .split('gotoThread("')[1];

            if (cy.$id(currentNode).length === 0) {
              cy.add({
                group: "nodes",
                data: {
                  id: currentNode,
                  name: currentNode,
                  label: getTransFromThreadName(currentNode),
                },
              });
            }

            if (cy.$id(targetNode).length === 0) {
              cy.add({
                group: "nodes",
                data: {
                  id: targetNode,
                  name: targetNode,
                  label: getTransFromThreadName(targetNode),
                },
              });
            }

            if (cy.$id(`${currentNode}_${targetNode}`).length <= 0) {
              cy.add({
                group: "edges",
                data: {
                  id: `${currentNode}_${targetNode}`,
                  source: currentNode,
                  target: targetNode,
                },
              });
            }
          } else if (target.includes("convo.stop")) {
            const targetNode = "end" + currentNode;

            if (cy.$id(targetNode).length === 0) {
              cy.add({
                group: "nodes",
                data: { id: targetNode, name: targetNode },
              });
            }
            if (cy.$id(`${currentNode}`).length <= 0) {
              cy.add({
                group: "nodes",
                data: { id: currentNode, name: currentNode },
              });
            }
            if (cy.$id(`${currentNode}_${targetNode}`).length <= 0) {
              cy.add({
                group: "edges",
                data: {
                  id: `${currentNode}_${targetNode}`,
                  source: currentNode,
                  target: targetNode,
                },
              });
            }
          }
        }
      }
    }
  }
  return cy;
}
