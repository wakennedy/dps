import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	let {plasticName, brandId} = req.body
	// maybe try JSON.parse here to 'even out' the data.
	brandId = Number(brandId)

	try {
		await prisma.plastic.create({
			data: {
		        name: plasticName,
                brand: {
					connect: {
						id: brandId
					}
				}
			},
			include: {
				brand: true	// this is the default, but I'm including it here to be explicit
			}
		})
        // TODO..  this does not work
		res.status(200).json({message: 'Plastic Created'})
	} catch (error) {
		console.log(error);
	}
}
