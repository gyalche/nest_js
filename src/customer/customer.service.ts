import { Injectable } from '@nestjs/common';
import { customerInterface } from './interface/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customers: customerInterface[] = [];

  getAllCustomers(): customerInterface[] {
    return this.customers;
  }

  addCustomer(customerdto: CreateCustomerDto): customerInterface {
    const newCustomer: customerInterface = {
      id: new Date().getTime(),
      ...customerdto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
