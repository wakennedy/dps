import { Brand, Plastic } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	let {brandId, name, plasticId, speed, glide, turn, fade} = req.body

	brandId = Number(brandId)
	plasticId = Number(plasticId)

    speed = parseFloat(speed);
    glide = parseFloat(glide);
    turn = parseFloat(turn);
    fade = parseFloat(fade);

	try {
		await prisma.discs.create({
			data: {
				brand: {
					connect: {
						id: brandId
						}
						},
				plastic: {
					connect: {
						id: plasticId
						}
						},
				name: name,
				speed: speed,
				glide: glide,
				turn: turn,
				fade: fade
				},
			include: {
				brand: true,
				plastic: true
				}
			})
        // TODO..  this does not work
		res.status(200).json({message: 'Disc Created'})
	} catch (error) {
		console.log(error);
	}
}