import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	let {name} = req.body

	try {
		await prisma.brand.create({
			data: {
		        name
			}
		})
        // TODO..  this does not work
		res.status(200).json({message: 'Disc Created'})
	} catch (error) {
		console.log(error);
	}
}
