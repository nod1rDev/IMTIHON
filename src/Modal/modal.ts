export const formShow = () => {
  const formModalEl: any = document.getElementById("formModal")!;
  formModalEl.showModal();
};

export const formClose = () => {
  const formModalEl: any = document.getElementById("formModal")!;
  formModalEl.close();
};

export const updateShow = () => {
  const updateModalEl: any = document.getElementById("updateModal")!;
  updateModalEl.showModal();
};

export const updateClose = () => {
  const updateModalEl: any = document.getElementById("updateModal")!;
  updateModalEl.close();
};

export const DeleteShow = () => {
  const updateModalEl: any = document.getElementById("delete")!;
  updateModalEl.showModal();
};

export const DeleteClose = () => {
  const updateModalEl: any = document.getElementById("delete")!;
  updateModalEl.close();
};
