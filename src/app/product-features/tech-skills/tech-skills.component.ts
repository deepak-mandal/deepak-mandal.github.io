import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';
import { SKILLS } from '../constant/product-feature-constant';
import { SkillsFlatNode, TechNode } from '../types/product-features.interface';

@Component({
  selector: 'tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css'],
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, AgGridModule, FormsModule, NgIf, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechSkillsComponent implements OnInit {

  ngOnInit(): void { }
  private _transformer = (node: TechNode, level: number): SkillsFlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    technologies: node.technologies,
    proof: node.proof,
    level,
  });

  treeControl = new FlatTreeControl<SkillsFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener<TechNode, SkillsFlatNode>(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children ?? [],
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  techSkills: TechNode[] = [
    {
      technologies: SKILLS.PROGRAMMING_LANGUAGE, children: [
        { technologies: SKILLS.JAVA, proof: SKILLS.JAVA_LOGO },
        { technologies: SKILLS.SQL, proof: SKILLS.ORACLE_LOGO },
        { technologies: SKILLS.TYPESCRIPT, proof: SKILLS.TS },
      ]
    },
    {
      technologies: SKILLS.WEB_TECHNOLOGIES, children: [
        {
          technologies: SKILLS.WEB_TECHNOLOGIES_BACKEND, children: [
            { technologies: SKILLS.SPRING, proof: SKILLS.SPRING_LOGO },
            { technologies: SKILLS.KAFKA, proof: SKILLS.KAFKA_LOGO },
            { technologies: SKILLS.REDIS, proof: SKILLS.REDIS_LOGO },
            { technologies: SKILLS.MYBATIS, proof: SKILLS.MYBATIS_LOGO },
            { technologies: SKILLS.RABBITMQ, proof: SKILLS.RABBITMQ_LOGO },
            { technologies: SKILLS.CLAMAV, proof: SKILLS.CLAMAV_LOGO },
            { technologies: SKILLS.JUNIT, proof: SKILLS.JUNIT_LOGO },
            { technologies: SKILLS.SONAR, proof: SKILLS.SONAR_LOGO },
            { technologies: SKILLS.MAVEN, proof: SKILLS.MAVEN_LOGO },
          ]
        },
        {
          technologies: SKILLS.WEB_TECHNOLOGIES_FRONTEND, children: [
            { technologies: SKILLS.ANGULAR, proof: SKILLS.ANGULAR_LOGO },
            { technologies: SKILLS.HTML, proof: SKILLS.HTML_LOGO },
            { technologies: SKILLS.CSS, proof: SKILLS.CSS_LOGO },
            { technologies: SKILLS.JAVASCRIPT, proof: SKILLS.JS },
            { technologies: SKILLS.AG_GRID, proof: SKILLS.AG_GRID_LOGO },
            { technologies: SKILLS.ANGULAR_MATERIALS, proof: SKILLS.ANGULAR_MATERIALS_LOGO },
            { technologies: SKILLS.RXJS, proof: SKILLS.RXJS_LOGO },
            { technologies: SKILLS.BOOTSTRAP, proof: SKILLS.BOOTSTRAP_LOGO },
            { technologies: SKILLS.ANGULAR_TC, proof: SKILLS.ANGULAR_TC_LOGO },
            { technologies: SKILLS.ESLINT, proof: SKILLS.ESLINT_LOGO },
            { technologies: SKILLS.LODASH, proof: SKILLS.LODASH_LOGO }
          ]
        },
        {
          technologies: SKILLS.DB, children: [
            { technologies: SKILLS.ORACLE, proof: SKILLS.ORACLE_LOGO },
            { technologies: SKILLS.POSTGRESQL, proof: SKILLS.POSTGRESQL_LOGO },
            { technologies: SKILLS.MS_SQL, proof: SKILLS.MS_SQL_LOGO },
            { technologies: SKILLS.MYSQL, proof: SKILLS.MYSQL_LOGO },
            { technologies: SKILLS.SQLITE, proof: SKILLS.SQLITE_LOGO },
            { technologies: SKILLS.MONGODB, proof: SKILLS.MONGODB_LOGO },
            { technologies: SKILLS.SOLR, proof: SKILLS.SOLR_LOGO }
          ]
        },
        {
          technologies: SKILLS.SOFTWARE_DEV_TOOLS, children: [
            { technologies: SKILLS.ECLIPSE, proof: SKILLS.ECLIPSE_LOGO },
            { technologies: SKILLS.VISUAL_STUDIO_CODE, proof: SKILLS.VS_CODE_LOGO },
            { technologies: SKILLS.INTILIJ_IDEA, proof: SKILLS.INTILIJ_IDEA_LOGO },
            { technologies: SKILLS.BITBUCKET, proof: SKILLS.BITBUCKET_LOGO },
            { technologies: SKILLS.JIRA, proof: SKILLS.JIRA_LOGO },
            { technologies: SKILLS.CONFLUENCE, proof: SKILLS.CONFLUENCE_LOGO },
            { technologies: SKILLS.POSTMAN, proof: SKILLS.POSTMAN_LOGO },
            { technologies: SKILLS.SWAGGER, proof: SKILLS.SWAGGER_LOGO },
            { technologies: SKILLS.TOMCAT, proof: SKILLS.TOMCAT_LOGO },
            { technologies: SKILLS.WILDFLY, proof: SKILLS.WILDFLY_LOGO },



          ]
        },
      ]
    },
    {
      technologies: SKILLS.DEV_OPS, children: [
        { technologies: SKILLS.JENKINS, proof: SKILLS.JENKINS_LOGO },
        { technologies: SKILLS.GIT, proof: SKILLS.GIT_LOGO },
        { technologies: SKILLS.CI_CD, proof: SKILLS.CI_CD_LOGO },
        { technologies: SKILLS.DOCKER, proof: SKILLS.DOCKER_LOGO },
        { technologies: SKILLS.PUTTY, proof: SKILLS.PUTTY_LOGO },
        { technologies: SKILLS.WINSCP, proof: SKILLS.WINSCP_LOGO },
        { technologies: SKILLS.NGINX, proof: SKILLS.NGINX_LOGO },
        { technologies: SKILLS.SERVICE_WRAPPER, proof: SKILLS.SERVICE_WRAPPER_LOGO }
      ]
    },
    {
      technologies: SKILLS.ANALYTICAL_TOOLS, children: [
        { technologies: SKILLS.PYTHON, proof: SKILLS.PY },
        { technologies: SKILLS.PANDAS, proof: SKILLS.PANDAS_LOGO },
        { technologies: SKILLS.NUMPY, proof: SKILLS.NUMPY_LOGO },
        { technologies: SKILLS.MATPLOTLIB, proof: SKILLS.MATPLOTLIB_LOGO },
        { technologies: SKILLS.OTHER_ML, proof: SKILLS.ML_LOGO },
      ]
    },
    {
      technologies: SKILLS.OS, children: [
        { technologies: SKILLS.LINUX, proof: SKILLS.LINUX_LOGO },
        { technologies: SKILLS.WINDOWS, proof: SKILLS.WINDOW_LOGO },
      ]
    },
    {
      technologies: SKILLS.MISCELLANEOUS, children: [
        { technologies: SKILLS.DS_ALGO, proof: SKILLS.DS_ALGO_LOGO },
        { technologies: SKILLS.LLD_HLD, proof: SKILLS.LLD_HLD_LOGO },

      ]
    },

  ];

  constructor() {
    this.dataSource.data = this.techSkills;
    this.treeControl.expandAll();
  }

  getChildren(node: SkillsFlatNode): TechNode[] {
    const find = (nodes: TechNode[]): TechNode | undefined => {
      for (const n of nodes) {
        if (n.technologies === node.technologies) return n;
        if (n.children) { const found = find(n.children); if (found) return found; }
      }
      return undefined;
    };
    return (find(this.techSkills)?.children ?? []).filter((c): c is TechNode => c !== undefined);
  }

  isLeafParent(node: SkillsFlatNode): boolean {
    return this.getChildren(node).every(c => !c.children || c.children.length === 0);
  }

  hasChild = (_: number, node: SkillsFlatNode) => node.expandable;
}
