export interface BaseModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
