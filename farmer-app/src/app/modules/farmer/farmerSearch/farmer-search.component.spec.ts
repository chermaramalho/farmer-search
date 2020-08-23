import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';
import { FarmerSearchComponent } from '@app/modules/farmer/farmerSearch/farmer-search.component';
import { CoreModule } from '@app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmerService } from '@app/core/services/farme.service';


describe('Testing the FarmerSearchComponent class!', () => {
  let component: FarmerSearchComponent;
  let fixture: ComponentFixture<FarmerSearchComponent>;
  let teste: FarmerSearchComponent;
  let element: HTMLElement;
  let farmerService: FarmerService;

  beforeEach(async(() => {
    teste = new FarmerSearchComponent(farmerService);
    TestBed.configureTestingModule({
      declarations: [FarmerSearchComponent],
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
    fixture = TestBed.createComponent(FarmerSearchComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement; // The HTML reference
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('Checks whether the class was created!', () => {
    expect(component).toBeTruthy();
  });

  it('Testing the searchFarme method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'searchFarme').and.callThrough();
    const params = 'Marlyn';
    component.searchFarme(params);
    expect(component.searchFarme).toHaveBeenCalled();
  }));

});

