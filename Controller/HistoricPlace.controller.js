import prisma from "../Libb/Prismaa.js";

// Get details of a single historic place by its ID
export const getHistoricPlaceDetails = async (req, res) => {
  const historicPlaceId = req.params.historicPlaceId;

  try {
    // Ensure `historicPlaceId` is a string
    const historicPlaceIdString = historicPlaceId.toString();

    // Fetch the historic place data
    const historicPlace = await prisma.historic.findUnique({
      where: { id: historicPlaceIdString },
    });

    if (!historicPlace) {
      return res.status(404).json({ message: "Historic place not found" });
    }

    res.status(200).json(historicPlace);
  } catch (err) {
    console.error("Error fetching historic place details:", err);
    res.status(500).json({ message: "Failed to fetch historic place details" });
  }
};

// Get a list of all historic places
export const getAllHistoricPlaces = async (req, res) => {
  try {
    // Fetch all historic places
    const historicPlaces = await prisma.historic.findMany();

    if (historicPlaces.length === 0) {
      return res.status(404).json({ message: "No historic places found" });
    }

    res.status(200).json(historicPlaces);
  } catch (err) {
    console.error("Error fetching historic places:", err);
    res.status(500).json({ message: "Failed to fetch historic places" });
  }
};
