import { Brand, Plastic } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	let {brand, name, plastic, speed, glide, turn, fade} = req.body


    speed = parseFloat(speed);
    glide = parseFloat(glide);
    turn = parseFloat(turn);
    fade = parseFloat(fade);

	try {
		await prisma.discs.create({
			data: {
				brand,
				name,
                plastic,
                speed,
                glide,
                turn,
                fade
			}
		})
        // TODO..  this does not work
		res.status(200).json({message: 'Disc Created'})
	} catch (error) {
		console.log(error);
	}
}