import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecandidatComponent } from './createcandidat.component';

describe('CreatecandidatComponent', () => {
  let component: CreatecandidatComponent;
  let fixture: ComponentFixture<CreatecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatecandidatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
