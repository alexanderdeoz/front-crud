import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverModel } from '../../../models/index';
import { DriverHttpService } from 'src/app/services/driver-http.service';
import { MessageService } from '../../../services/message.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  //delcaracionde atributos

  selecteddriver: DriverModel = {};
  drivers: DriverModel[] = [];
  formDriver: FormGroup;

  constructor(
    private driverServiceHttp: DriverHttpService,
    private formBuilder: FormBuilder,
    public messageservice: MessageService
  ) {
    this.formDriver = this.newFormGroupDriver();
    //constructor nos ayuda a inyectar dependencias
    // inicializacion
    /*
    this.driver = {
      id: 100,
      vehicle_id: 1321,
      description: 'El conductor es muy sociable',
      email: 'driver@ubergas.com',
      entryDate: new Date(),
      lastname: 'Casares',
      names: 'Juan',
    };
¨*/
  }
  ngOnInit() {
    //llamamos a metodos
    this.getDrivers();
    // this.getDriver();
  }

  newFormGroupDriver(): FormGroup {
    return this.formBuilder.group({
      id: [null, [Validators.required, Validators.maxLength(5)]],
      vehicle_id: [null, [Validators.required, Validators.maxLength(6)]],
      description: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      entryDate: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      names: [null, [Validators.required]],
    });
  }

  getDrivers(): void {
    this.driverServiceHttp.getAll().subscribe(
      (response) => {
        console.log(response);
        this.drivers = response.data;
      },
      (error) => {
        this.messageservice.error(error);
      }
    );
  }

  getDriver(): void {
    this.driverServiceHttp.getOne(3).subscribe(
      (response) => {
        console.log(response);
        this.selecteddriver = response.data;
      },
      (error) => {
        this.messageservice.error(error);
      }
    );
  }

  storeDriver(driver: DriverModel): void {
    this.driverServiceHttp.store(driver).subscribe(
      (response) => {
        console.log(response);
        this.saveDriver(driver);
        this.messageservice.success(response);
      },
      (error) => {
        this.messageservice.error(error);
      }
    );
  }

  updateDriver(driver: DriverModel): void {
    this.driverServiceHttp.update(driver.id, driver).subscribe(
      (response) => {
        console.log(response);
        this.saveDriver(driver);
        this.messageservice.success(response);
      },
      (error) => {
        this.messageservice.error(error);
      }
    );
  }

  deleteDriver(driver: DriverModel): void {
    this.driverServiceHttp.delete(driver.id).subscribe(
      (response) => {
        console.log(response);
        this.removeDriver(driver);
        this.messageservice.success(response);
      },
      (error) => {
        this.messageservice.error(error);
      }
    );
  }

  saveDriver(driver: DriverModel): void {
    const index = this.drivers.findIndex(element => element.id === driver.id);
    //findIndex  devuelve el indice del primer elemten

    if (index === -1) {
      this.drivers.push(driver);
    }
      this.drivers[index] = driver;
    
  }

  removeDriver(driver: DriverModel) {
    this.drivers = this.drivers.filter((element) => element.id !== driver.id);
  }

  selectDriver(driver: DriverModel) {
    console.log(driver);
    this.formDriver.patchValue(driver);
  }

  onSubmit(driver: DriverModel) {
    if (this.formDriver.valid) {
      console.log('onsubmit');
      if (driver.id) {
        this.updateDriver(driver);
      } else {
        this.storeDriver(driver);
      }
    }else{
      this.formDriver.markAllAsTouched();
    }
  }
  get idField() {
    return this.formDriver.controls['id'];
  }
  get vehicleIdField() {
    return this.formDriver.controls['vehicle_id'];
  }
  get descriptionField() {
    return this.formDriver.controls['description'];
  }

  get emailField() {
    return this.formDriver.controls['email'];
  }
  get entryDateField() {
    return this.formDriver.controls['entryDate'];
  }
  get lastnameField() {
    return this.formDriver.controls['lastname'];
  }
  get namesField() {
    return this.formDriver.controls['names'];
  }
}
