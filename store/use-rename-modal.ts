import { create } from "zustand";

interface DefaultValuesType {
  id: string;
  title: string;
}

const defaultValues: DefaultValuesType = {
  id: "",
  title: ""
};

interface IRenameModal {
  isOpen: boolean;
  initialValues: DefaultValuesType;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  initialValues: defaultValues,
  onOpen: (id, title) => {
    set({ isOpen: true, initialValues: { id, title } });
  },
  onClose: () => {
    set({ isOpen: false, initialValues: defaultValues });
  }
}));