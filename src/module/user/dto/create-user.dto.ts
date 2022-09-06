import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;
  
    @ApiProperty()
    password: string;
  
    @ApiProperty({ default: [], isArray: true })
    role: string[];
  
    @ApiProperty({ required: false, default: true })
    isEnabled?: boolean = true;
}
