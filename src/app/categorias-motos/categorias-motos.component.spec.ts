/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CategoriasMotosComponent } from './categorias-motos.component';

describe('CategoriasMotosComponent', () => {
  let component: CategoriasMotosComponent;
  let fixture: ComponentFixture<CategoriasMotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasMotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
