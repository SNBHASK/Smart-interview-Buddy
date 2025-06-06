document.getElementById('interviewForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const role = document.getElementById('role').value;
  const company = document.getElementById('company').value;
  const output = document.getElementById('output');
  output.innerHTML = "Loading...";

  try {
    const response = await fetch('http://localhost:5001/api/interview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role, company }),
    });

    const data = await response.json();
    console.log("Frontend Response:", data);

    if (data.answer) {
      output.innerHTML = `<pre>${data.answer}</pre>`;
    } else {
      output.innerHTML = "No answer received from the server.";
    }
  } catch (err) {
    output.innerHTML = "Error fetching questions.";
    console.error(err);
  }
});
