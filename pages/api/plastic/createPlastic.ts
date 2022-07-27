import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	let {name, brand} = req.body

	try {
		await prisma.plastic.create({
			data: {
		        name,
                brand
			}
		})
        // TODO..  this does not work
		res.status(200).json({message: 'Disc Created'})
	} catch (error) {
		console.log(error);
	}
}
