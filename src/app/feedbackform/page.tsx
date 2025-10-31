import { Metadata } from "next";
import { NewFeedbackForm } from "./components/feedbackForm";




export const metadata: Metadata = {
  title: "Feedback",
  description: "Página do formulário",
};
export default function FeedbackForm() {
  return (
<NewFeedbackForm />
    
  );
}
