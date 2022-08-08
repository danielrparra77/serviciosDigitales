import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { AjaxService } from '../../providers/ajax.service';

@Component({
  selector: 'app-servicios-digitales',
  templateUrl: './serviciosDigitales.component.html',
  styleUrls: ['./serviciosDigitales.component.css']
})
export class ServiciosDigitalesComponent implements AfterViewInit  {
  displayedColumns = ['evento', 'fecha_evento', 'cantidad', 'valor'];
  dataSource: MatTableDataSource<any>;
  servicisoDigitales: any[];
  plats:any[]=[
    {value:'PACTO',name:'Plataforma de generación de pagarés'},
    {value:'DEPO',name:'Plataforma de bóveda de valores'},
    {value:'BAKO',name:'Plataforma de backoffice'},
    {value:'PLATGI',name:'Plataforma digital'}
  ]
  plataformaSeleccionada = 'PACTO';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private ajax: AjaxService
  ) {
    // Assign the data to the data source for the table to render
    this.servicisoDigitales = [];
  }

  ngAfterViewInit() {
    this.iniciarTabla();
    this.getList();
  }

  iniciarTabla(){
    this.dataSource = new MatTableDataSource(this.servicisoDigitales);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    /*this.dataSource.filterPredicate = function customFilter(data , filter:string ): boolean {
      return (data.plataforma.startsWith(filter));
    }*/
  }

  BuscarPlat() {
    let filterValue = this.plataformaSeleccionada;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getList() {
    this.ajax.get('/consultar', {}).subscribe(p => {
      if(p.status == "success"){
        this.servicisoDigitales = p.servicios;
        this.iniciarTabla();
      }
    })
  }

}