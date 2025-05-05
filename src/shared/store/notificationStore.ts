import { create } from 'zustand';

interface Notification {
  id: number;
  content: string;
  urlLink: string;
  isRead: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
}));

export default useNotificationStore;
