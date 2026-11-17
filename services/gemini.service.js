const getChatResponse = async (userMessage) => {
    try {
        const systemPrompt = `Kamu adalah asisten Customer Service untuk aplikasi LaundrAI.
Tugasmu HANYA menjawab pertanyaan seputar layanan laundry kami.

Data Katalog Layanan LaundrAI:
- Cuci Standar: Rp 5.000/kg
- Cuci Kilat: Rp 8.000/kg
- Cuci Sprei: Rp 5.000/item
- Cuci Selimut: Rp 10.000/item
- Jasa Antar Jemput: Rp 5.000

ATURAN KETAT (GUARDRAILS):
1. Tolak dengan sopan semua pertanyaan di luar topik laundry, harga, atau LaundrAI. Arahkan kembali ke layanan laundry.
2. JANGAN PERNAH memberikan kode pemrograman, HTML, tugas kuliah, atau hal teknis lainnya.
3. Jawab dengan ramah, singkat, jelas, dan menggunakan bahasa Indonesia yang santai ala mahasiswa.`;

        // Menggunakan Fetch API standar untuk menembak OpenRouter
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // Kita gunakan model gratis yang handal dan cepat dari OpenRouter
                model: "inclusionai/ling-3.2-flash:free", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userMessage }
                ]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "Gagal merespons dari OpenRouter.");
        }

        return data.choices[0].message.content;
    } catch (error) {
        console.error("OpenRouter API Error:", error);
        throw new Error("Gagal menghubungi layanan AI.");
    }
};

module.exports = { getChatResponse };