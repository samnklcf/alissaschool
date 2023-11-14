const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

// Fonction pour ajouter une attente (sleep) en millisecondes
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function handler(req, res) {
  async function sam() {
    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      let promptSend = req.body.promptSend;

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promptSend,
        temperature: 0.9,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      });

      res.status(200).json(response.data.choices[0].text);
    } catch (error) {
      // Gestion des erreurs
      if (error.response && error.response.status === 429) {
        // Attendre 1 seconde avant de réessayer la requête
        await delay(1000);
        return sam(); // Réessayer la requête
      } else {
        // Gérer d'autres erreurs
        console.error("Erreur non gérée:", error);
        res.status(500).json({ error: "Erreur interne du serveur" });
      }
    }
  }

  sam();
}