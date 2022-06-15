import { IsEmail, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class FFTFilterDTO {
  @IsNotEmpty()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @Max(1)
  @Min(0)
  fftFilter: number;
}
