import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  // @Get('flavors')
  // findAll() {
  //   return 'This action returns all coffees';
  // }

  // @Get()
  // findAll(@Res() response) {
  //   return response.status(200).send('This action returns all coffees');
  // }

  // @Get()
  // findAll() {
  //   return 'This action returns all coffees';
  // }

  // Implement Pagination with Query Parameters
  // localhost:3000/coffees?limit=20&offset=10
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  //   findOne(@Param() params) {
  findOne(@Param('id') id: number) {
    // return `This action returns #[id] coffees`;
    // return `This action returns #${params.id} coffees`;
    // return `This action returns #${id} coffees`;
    console.log(typeof id);
    return this.coffeeService.findOne(id);
  }

  // @Post()
  // @HttpCode(HttpStatus.GONE)
  // create(@Body() body) {
  //   return body;
  // }

  @Post()
  // create(@Body() body) {
  // return body;
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates #${id} coffee`;
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffee`;
    return this.coffeeService.remove(id);
  }
}
