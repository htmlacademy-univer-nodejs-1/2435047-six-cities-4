import { Container } from 'inversify';
import {
  DefaultOfferService,
  OfferEntity,
  OfferModel,
  OfferService,
} from './index.js';
import { types } from '@typegoose/typegoose';
import { Component } from '../../types/index.js';
import { Controller } from '../../libs/rest/index.js';
import OfferController from './offer.controller.js';

export function createOfferContainer(container: Container) {
  container.bind<OfferService>(Component.OfferService).to(DefaultOfferService);
  container
    .bind<types.ModelType<OfferEntity>>(Component.OfferModel)
    .toConstantValue(OfferModel);
  container
    .bind<Controller>(Component.OfferController)
    .to(OfferController)
    .inSingletonScope();
}
