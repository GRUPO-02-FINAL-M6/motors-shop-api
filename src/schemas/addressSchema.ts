import { z } from "zod";

const address = z.object({
    id: z.number(),
    cep: z.string().min(1, {message: "cep"}),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.number(),
    complement: z.string().optional().default("")
})

const addressRequest = address.omit({id: true})

const addressUpdateRequest = addressRequest.partial()


const addressSchema = {
    address,
    addressRequest,
    addressUpdateRequest
}

export default addressSchema