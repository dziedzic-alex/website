terraform {
  required_version = ">= 1.15.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.45"
    }
  }

  backend "s3" {
    bucket  = "w-tf-state20260516052247697800000001-433851229368-us-east-2-an"
    key     = "terraform.tfstate"
    region  = "us-east-2"
    encrypt = true
  }
}