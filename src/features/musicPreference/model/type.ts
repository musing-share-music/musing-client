export type Step = 'genre' | 'mood' | 'artist';
export type StepContent = {
  [key in Step]: {
    title: React.ReactNode;
    caption: React.ReactNode;
    form: React.ReactNode;
  };
};
