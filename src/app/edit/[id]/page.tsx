import { Metadata } from "next";

import { EditFeedbackForm } from "./components/FeedbackEditForm";




export const metadata: Metadata = {
  title: "Feedback",
  description: "Página do formulário",
};
export default function FeedbackForm() {
  return (
<EditFeedbackForm />
    
  );
}
