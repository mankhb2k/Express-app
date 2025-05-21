import {z} from 'zod'

// Định nghĩa schema cho car
export const carSchema = z.object({
    brand: z.string().min(1, 'brand is required'),
    year: z.number().int().gte(1900, 'Year invalid').lte(2100, 'Year invalid'),
    country: z.string().min(1, 'Country is requirred'),
    price: z.number().int()
})

// Middleware validate create/update car
export function validateCar(req, res, next){
    try{
       // Nếu body là string (raw), cần parse lại
       const parsed = carSchema.parse(req.body);
       // Lưu data đã parse lại cho controller dùng luôn (option)
       req.validatedCar = parsed;
       next();
    }catch(err){
        // Trả về lỗi chi tiết của Zod
        return res.status(400).json({erro: err.errors?.[0]?.message || 'Invalid data'})
    }
}