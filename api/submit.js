export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/app47Zy9m5jAbFYGT/tbl7W4I0sueQYgvxj`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Email: email,
            Status: 'New',
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Airtable error:', error);
      return res.status(500).json({ error: 'Failed to save submission' });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
