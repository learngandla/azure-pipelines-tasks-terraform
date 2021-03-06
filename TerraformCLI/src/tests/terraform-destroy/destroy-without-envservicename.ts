import { TaskScenario } from "../scenarios";
import { TerraformInputs } from '../scenarios-terraform';
import '../scenarios-terraform';
import { env } from './destroy-without-envservicename.env';

new TaskScenario<TerraformInputs>()
    // .inputAzureRmServiceEndpoint(env.environmentServiceName, env.subscriptionId, env.tenantId, env.servicePrincipalId, env.servicePrincipalKey)
    .inputTerraformCommand(env.terraformCommand)
    // do not provide environmentServiceName input
    // .input({ environmentServiceName: env.environmentServiceName })
    .inputApplicationInsightsInstrumentationKey()
    .answerTerraformExists()
    .answerTerraformCommandIsSuccessful(env.commandArgs)
    .answerTerraformCommandWithVarsFileAsWorkingDirFails()
    .run()