export abstract class IWizardStep {

    abstract stepName: string;

    abstract canMoveNext(): boolean;

    abstract canMoveBack(): boolean;

    abstract next();

    abstract back();
}
