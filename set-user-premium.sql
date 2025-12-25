-- Script pour mettre un utilisateur en premium manuellement
-- Remplacez l'email par votre email

UPDATE user_profiles 
SET 
  is_premium = TRUE,
  subscription_status = 'active',
  premium_since = NOW()
WHERE user_email = 'rayan.ouabri1@gmail.com';

-- Vérifier que ça a fonctionné
SELECT id, user_email, is_premium, subscription_status, premium_since 
FROM user_profiles 
WHERE user_email = 'rayan.ouabri1@gmail.com';

