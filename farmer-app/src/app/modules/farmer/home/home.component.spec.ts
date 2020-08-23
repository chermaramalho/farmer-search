import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
import { HomeComponent } from '@app/modules/farmer/home/home.component';
import { CoreModule } from '@app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerService } from '@app/core/services/farme.service';


describe('Testing the HomeComponent class!', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let teste: HomeComponent;
  let element: HTMLElement;
  let farmerService: FarmerService;

  beforeEach(async(() => {
    teste = new HomeComponent(farmerService);
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [FarmerService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement; // The HTML reference
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('Checks whether the class was created!', () => {
    expect(component).toBeTruthy();
  });

  it('Testing the mySelectedFarmer method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'mySelectedFarmer').and.callThrough();
    const params = 'Marlyn';
    component.mySelectedFarmer(params);
    expect(component.mySelectedFarmer).toHaveBeenCalled();
  }));

});

