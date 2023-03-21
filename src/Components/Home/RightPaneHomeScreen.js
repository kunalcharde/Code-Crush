import React, { useContext } from "react";
// npm i react-icons
import { FcOpenedFolder } from "react-icons/fc";
import { BiEditAlt } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
import Card from "../Card";
import { ModalContext } from "../../Context/ModalContext";
import { PlaygroundContext } from "../../Context/PlaygroundContext";

function RightPaneHomeScreen() {
  const { openModal } = useContext(ModalContext);
  const { folders, deleteFolder, deleteCard } = useContext(PlaygroundContext);
  return (
    <div className="border-2 border-black h-screen p-8">
      <div className="flex justify-between items-center">
        <h2>
          My <span className="font-semibold text-2xl">Playground</span>
        </h2>
        <h4
          onClick={() =>
            openModal({
              show: true,
              modalType: 1,
              identifiers: {
                folderId: "",
                cardID: "",
              },
            })
          }
        >
          <span className="font-semibold text-2xl">+</span> New Folder
        </h4>
      </div>
      <hr className="mb-12 mt-4 bg-black" />
      {Object.entries(folders)?.map(([folderId, folder]) => (
        <div className="flex justify-between my-8">
          <div className="flex items-center">
            <div className="flex items-center"></div>
            <FcOpenedFolder size={"2em"} />
            <h3 className="font-semibold">{folder?.title}</h3>
          </div>
          <div className="flex gap-4 items-center">
            <BiEditAlt
              size={"1.5em"}
              onClick={() => {
                openModal({
                  show: true,
                  modalType: 4,
                  identifiers: {
                    folderId: folderId,
                    cardID: "",
                  },
                });
              }}
            />
            <IoTrashOutline
              size={"1.5em"}
              onClick={() => deleteFolder(folderId)}
            />
            <h4
              onClick={() => {
                openModal({
                  show: true,
                  modalType: 2,
                  identifiers: {
                    folderId: folderId,
                    cardID: "",
                  },
                });
              }}
            >
              + New Playground
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightPaneHomeScreen;
