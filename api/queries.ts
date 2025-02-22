export const sendEmail = async (
  email: string,
  subject: string,
  message: string
) => {
  const response = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify({ email, subject, message }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }

  return response.json();
};
