
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from './core/core.module';


describe('Testing the AppComponent class!', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let teste: AppComponent;

  beforeEach(async(() => {
    teste = new AppComponent();
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule, HttpClientModule, CoreModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Checks whether the class was created!', () => {
    expect(component).toBeTruthy();
  });

});

