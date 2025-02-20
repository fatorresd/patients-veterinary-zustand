export type Patient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symptoms: string;
};

// omit the id field
export type DraftPatient = Omit<Patient, "id">;