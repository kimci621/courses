import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     res.status(200).json({ message: "Hello from Next.js!" });
//   } catch (err) {
//     res.status(500).json({ error: "failed to load data" });
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, message } = req.body;
  try {
    console.log(name, message);
    res.status(200).json({ message: message, name: name });
    // res.redirect(307, "/");
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
