import prisma from "../Libb/Prismaa.js";

export const getWaterfallDetails = async (req, res) => {
  const waterfallId = req.params.waterfallId;

  try {
    // Ensure `waterfallId` is a string
    const waterfallIdString = waterfallId.toString();

    // Fetch the waterfall data
    const waterfall = await prisma.waterfall.findUnique({
      where: { id: waterfallIdString },
    });

    if (!waterfall) {
      return res.status(404).json({ message: "Waterfall not found" });
    }

    res.status(200).json(waterfall);
  } catch (err) {
    console.error("Error fetching waterfall details:", err);
    res.status(500).json({ message: "Failed to fetch waterfall details" });
  }
};

export const getAllWaterfalls = async (req, res) => {
  try {
    // Fetch all waterfalls
    const waterfalls = await prisma.waterfalls.findMany();

    if (waterfalls.length === 0) {
      return res.status(404).json({ message: "No waterfalls found" });
    }

    res.status(200).json(waterfalls);
  } catch (err) {
    console.error("Error fetching waterfalls:", err);
    res.status(500).json({ message: "Failed to fetch waterfalls" });
  }
};
