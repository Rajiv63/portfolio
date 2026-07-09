import { Component, OnInit } from '@angular/core';
import { Certification } from '../../models/portfolio.models';
import { PortfolioService } from '../../services/portfolio.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certs: Certification[] = [];
  constructor(private portfolio: PortfolioService, private firebase: FirebaseService) {}
  ngOnInit() {
    this.certs = this.portfolio.getCertifications();
    this.firebase.trackPageView('Certifications');
  }
}
